const a=[0,.82,.44,.28,.65,0,.49,0,.41,.27,.01,.05,.04,.69,.01,.24,.79,.99,.12,.02,.76,.06,.43,0,.88,.36,0,.27,.07,0,.02,.13,.98,0,.58,.01,.19,.01,.8,.13,.19,.55,.35,.33,.17,.01,.18,.01,.04,.09,.51,0,.44,.95,0,.01,.46,0,.15,.71,0,.86,.16,.49,.38,.01,.06,0,.96,.9,.57,.05,0,.01,.91,.76,.44,0,.78,1,.9,.79,.74,.16,.91,0,.24,.86,.52,.21,0,.98,0,.19,.68,.37,.34,.46,.01,0,.68,.07,0,.94,0,.05,.01,0,.37,0,.08,.03,.91,.24,.28,.66,.11,.15,.33,.37,.52,.07,.11,.55,.59,.09,.77,0,.11,.14,0,.02,.57,.08,.68,0,0,.12,.01,0,.08,0,.01,.15,0,.19,.68,0,0,.48,.1,.02,.13,.08,0,0,.53,.01,.57,0,0,0,.22,.03,0,0,.62,.05,0,.81,0,.19,0,.07,.54,.08,.27,0,0,.79,.68,.14,.71,0,0,.84,.49,0,0,.07,.84,0,.28,0,.01,.74,0,0,.06,.37,.22,.07,.22,.06,.53,.01,.38,0,0,.03,0,.04,.74,.27,0,.11,.41,0,.03,0,0,0,0,.94,.07,.24,0,.11,0,.06,.62,.81,.28,.34,0,0,0,0,0,.47,0,.01,0,0,0,.01,.99,.59,.55,.44,0,.03,0,.03,.08,.06,.22,.04,.06,.04,.3,0,0,.11,0,0,.01,.03,.15,.08,.69,.07,.49,.25,.92,.99,0,0,.67,.05,0,0,.14,.22,0,.89,0,.21,0,.37,0,.02,.97,.05,0,.2,.01,.03,.27,.05,.92,.26,.1,.14,.19,.71,.09,0,0,0,.43,.6,.01,0,0,.04,0,0,.41,.69,.16,.21,.04,.2,.03,0,.37,.08,.67,0,.94,.03,.21,.21,0,.88,.04,0,.9,.44,0,.93,.58,.25,.12,.57,.56,0,.79,0,.01,0,0,0,.13,.19,.09,.07,.53,.24,.3,.15,0,0,.98,.36,0,.18,0,.25,.24,.03,.82,0,0,0,.4,.16,.38,0,.42,.18,.49,.63,.15,.13,.19,.88,.75,.91,.75,0,.45,.1,.01,.18,.04,.41,.03,.65,.58,0,.8,.22,0,.72,.12,.62,0,0,.17,.52,.01,.72,0,.32,.09,.77,0,.07,0,.05,.99,0,.11,.23,.09,.02,0,.02,.01,0,.14,.01,0,.09,.6,.51,.7,0,0,.14,.05,.11,.61,0,.12,.99,.07,.59,.37,0,.9,0,.46,0,.01,.38,0,.96,.91,.34,.41,0,.94,0,.67,.19,.81,.71,0,.12,.04,.04,0,.77,.86,.2,.83,0,0,.04,.04,0,.87,0,0,.02,.96,.38,.93,.04,.4,.35,.39,.68,.02,.04,.51,0,0,0,.09,.91,.23,.03,0,.1,.16,0,.01,0,.38,.52,.52,.67,0,0,0,.1,.21,.92,.11,.76,0,0,.69,0,.3,.25,0,.05,.63,0,0,0,0,.58,0,.33,.24,0,0,0,.81,.94,0,0,.87,.03,0,.22,.23,.2,.89,0,.01,.06,.03,.56,.39,.14,.04,0,.21,.22,.75,.03,0,.06,.87,.52,.9,.2,.2,.13,.68,.39,.08,.38,.78,0,0,0,0,.05,.19,0,.67,.08,.13,.54,.57,.17,0,.09,.98,.07,0,.7,.43,.99,.93,0,.36,0,0,.16,.68,.02,.55,.13,.92,0,.07,.41,.28,0,.02,0,.01,.1,0,.52,0,.04,.77,0,0,.1,.01,0,.05,0,.1,0,.67,0,0,0,0,.56,.38,.19,.33,.02,0,.37,.17,0,.01,1,.01,.63,.76,.58,.03,.49,.25,.95,.37,.51,.97,0,.53,0,.69,0,.01,.19,.47,.41,.33,0,0,0,.02,.64,.77,.01,.54,0,.06,.42,0,0,.97,.52,.32,0,.3,.91,0,0,0,.03,.04,0,.91,.28,.14,0,0,.24,.16,.04,.34,.07,.01,0,.18,.04,.17,.04,.98,.32,.14,.05,.04,.45,0,.01,.15,.03,.86,.02,.01,.01,.01,.23,.87,.01,.98,.19,0,0,.07,.9,.57,.23,.12,.4,.41,0,.25,.08,.39,.01,.06,0,0,.76,.81,0,.82,.18,.32,.45,.01,.83,.75,.01,.54,.01,.34,.11,.06,.06,.09,0,0,0,.35,0,0,.13,.01,0,.89,0,.25,.48,.47,.07,.61,0,0,0,.01,0,.3,0,0,0,.81,.01,.43,.03,.11,0,.77,.2,.01,.07,.76,.03,.03,.19,0,.38,.2,.55,.87,.53,.04,0,.03,0,.54,.5,.25,0,0,.02,.01,.24,.69,0,.33,.3,0,.21,0,.77,.42,.2,.43,.11,0,.01,0,.86,.01,0,.16,.26,0,.14,.01,.28,.06,.15,.04,.63,.87,.19,0,0,0,.38,0,.34,.47,.09,0,0,.13,0,.04,0,.02,.1,.99,0,0,0,.13,.01,.6,0,0,.94,.71,.36,.01,.24,0,.07,.05,.03,.63,.46,.26,0,.12,.03,.49,.02,.44,.67,.1,.56,.69,.42,0,.77,.01,0,.01,0,0,0,.62,.65,.09,0,.01,0,0,.18,0,.02,.39,.32,.1,.86,0,.16,.11,0,0,.06,.13,.74,.67,.83,0,.39,0,.38,.07,.02,0,.97,0,.37,.01,.67,.18,.02,0,.14,0,.11,0,.19,.29,.01,.35,.01,.5,.37,.05,.59,.01,.29,.56,.03,.21,.75,0,0,0,.46,.06,.03,0,0,0,.08,.81,0,.03,0,.02,.03,0,0,0,0,.29,0,0,.01,.12,0,.34,.06,.55,.55,.16,.29,.37,.37,.23,.08,.03,.35,.36,.02,.64,0,0,0,0,.99,.06,0,0,.82,.16,.64,.89,0,.4,.01,.68,.81,0,.07,.01,.02,.41,0,.52,0,.2,0,.7,.46,.03,.2,0,.96,.59,0,.01,.75,.01,.04,0,.48,.21,.12,.59,.29,.55,0,0,.87,0,0,.03,.8,0,0,.1,.39,.03,.42,0,0,0,.09,.05,.68,.03,0,0,.83,0,.39,.3,.33,0,.03,.96,.3,.03,.05,.31,.02,.66,.48,.25,0,0,0,.16,.56,0,.16,0,.45,.53,.08,.09,.67,.21,0,0,0,0,.08,.6,0,.88,.53,0,.72,.6,0,.24,.17,.27,.03,.56,.09,0,.49,0,.63,.24,.04,.01,.81,.37,0,0,0,.74,.1,.29,.14,.01,0,.64,0,.95,.08,.04,0,0,.2,.17,0,0,0,0,0,.25,.46,0,0,.81,.26,.68,.65,.09,.1,.06,.03,.79,0,0,.01,.01,.99,.75,.32,0,.74,.03,.02,.33,0,.09,.02,.8,.15,.06,.01,0,.57,.47,.01,.71,.08,.02,.91,.84,0,.05,.52,0,0,0,.95,.88,0,.97,.13,0,.04,.76,0,.05,.25,.97,0,0,.27,.01,0,0,0,.24,0,0,0,0,.08,.68,.25,.73,.16,.71,.52,.12,0,.04,.43,.44,.08,0,.77,.03,.88,.64,0,.11,.4,0,0,.01,.04,0,.03,0,.02,.38,.59,.06,0,0,0,0,.01,0,0,.55,.87,0,.05,.12,0,.98,.02,0,.66,0,0,.94,0,.3,0,.38,.85,.26,0,.47,.07,.16,0,0,0,.08,.06,.36,0,.84,0,.2,.24,.86,0,0,0,.25,.06,0,.15,.76,.07,.07,.59,0,.16,.1,0,.07,0,.05,.8,0,.09,.15,.36,.58,0,.17,.49,.01,.43,.04,.46,0,.67,.75,.05,.02,0,.44,.05,.21,.88,0,0,.07,.95,0,0,0,.11,.25,0,.03,0,0,0,0,0,0,0,.06,0,0,0,.3,.59,.84,0,.04,.41,.58,.4,0,.03,0,.09,.28,0,0,.67,.02,.92,0,.58,0,.01,0,0,0,0,.25,.86,0,.02,.32,.15,0,.13,0,.36,.01,0,.01,0,0,.03,.46,.61,0,0,.08,.02,.65,.55,0,.62,.53,.01,.07,0,.07,.54,.06,.73,.02,.34,.24,0,.12,0,.89,.16,.04,0,0,.52,0,.01,.03,.21,0,0,.82,.1,.8,.06,.02,.95,.7,.31,.9,.63,.73,0,.93,.05,.8,.01,.07,.51,0,0,.36,.05,.67,.03,0,.7,.05,.13,.02,.76,0,.01,0,.1,0,.14,.54,.08,0,.1,0,.24,.81,0,0,.06,0,.38,0,.09,.28,.23,.83,0,.34,.37,.38,0,.67,.02,.23,0,.12,.23,.33,.31,.37,0,.43,.01,.89,.79,.55,.07,0,0,.03,.09,0,.38,.82,0,.25,.12,0,.03,0,.03,.01,.61,0,.31,0,.59,.98,0,.73,.02,.45,.03,.01,0,.26,.09,.11,.03,.01,.68,0,0,.05,.02,.17,.75,.95,.84,.76,.13,0,0,.73,.86,0,.71,.78,.32,.09,.03,0,.73,0,.05,0,0,.01,.68,.4,.02,.16,0,.02,.01,.76,.45,.38,.78,.15,.01,.73,0,.47,.02,.54,.33,.14,.01,0,0,.68,.41,.99,.07,.54,0,.01,.17,.34,.44,.1,.01,0,.01,0,.02,.06,.06,.15,0,.44,.03,.02,.71,.67,.04,.46,.59,0,.84,0,.06,.12,.29,.16,.08,.15,.17,0,.05,0,.04,.02,.65,.74,.03,.51,.11,0,.3,0,.15,.06,0,0,0,.16,.67,.51,.46,.86,.38,.14,0,0,.01,.01,0,.27,.05,.01,.01,.02,.01,.63,.01,.48,.41,.48,0,.42,.06,.23,.3,.03,0,.02,.28,0,.04,.97,.52,.77,.01,0,.07,0,.01,.21,.08,.64,.03,.1,0,.05,.63,.26,.65,.91,.54,.56,.29,.98,.04,.39,.31,.12,.2,.04,.23,.01,.43,.05,.01,0,.82,.1,0,0,.86,.02,.09,0,.01,.14,.84,0,.44,.84,.21,.47,.73,.43,.88,.81,.71,.37,.01,.39,.06,0,.41,.53,.13,.38,.52,0,.75,.02,.06,.32,.16,.72,.07,0,.08,.19,.75,.08,.05,.16,0,0,.04,.21,.51,.22,.99,.97,0,0,.04,0,0,.23,.01,.11,.99,.15,0,0,.05,.04,.01,.75,.29,0,.01,0,0,.87,.03,0,.02,.01,.46,.07,.32,.09,.06,.03,.25,.01,.9,.61,.41,0,.46,0,.25,.22,0,0,0,.23,0,.26,.12,.49,.11,.51,0,0,.19,.01,.03,0,.53,.07,.99,.01,.01,.02,.93,.66,.09,.05,.59,0,.06,0,.03,.21,0,0,.01,.3,.12,.03,0,0,0,.67,.17,.7,0,.22,.11,.41,.01,0,0,.95,.41,0,.97,.01,.49,.01,.94,0,.01,.04,.03,.61,.05,.06,0,.5,0,.16,.04,.21,.25,.24,.01,.35,.59,0,0,.42,.94,.04,0,0,0,0,.39,.05,.93,.13,.6,.59,.19,.09,.39,.08,0,.01,0,0,.01,.8,.06,.67,.01,0,.59,.01,.82,.05,.92,0,.42,0,0,.23,.86,.96,.61,.22,.02,.68,.03,.57,.01,.43,.01,.73,0,.71,.05,.17,0,.55,.07,.08,.61,.78,.25,.29,.01,.01,0,.43,0,0,.01,.1,.06,.69,.55,.63,0,.9,.05,.94,.2,.52,.95,.17,.96,.23,0,0,.92,0,.01,.08,.51,0,.72,0,.66,.15,.63,.43,.05,.54,.15,.02,.01,.11,.11,0,.86,.45,.14,.04,.33,.62,.03,.89,.26,.02,0,.22,.3,.79,.51,.3,.81,0,0,.02,.08,.69,.53,0,.13,.02,.36,0,.01,.55,.06,.05,.86,.34,0,.7,0,.54,.03,.09,0,0,.09,.93,0,.03,.95,.9,.24,.7,0,.54,0];export{a as pvalData};
