const a=[.01,.04,.02,.92,.03,0,.53,0,.04,.02,.05,.53,.26,.72,.01,.31,.74,.54,.23,.27,.31,.74,.36,0,.73,.89,.12,.43,.13,.01,.31,.45,.23,.06,.17,.18,0,0,.95,0,.35,.33,.88,.7,.09,0,.65,0,.28,.02,.55,.02,0,.36,0,.24,.44,0,.96,.54,.01,.21,.76,1,.54,0,.85,0,.54,.36,.74,0,0,.02,.03,.63,.82,.01,.23,.48,.25,.82,.18,.94,.69,.45,.7,.76,.46,.07,0,.87,0,.45,.86,0,.64,.55,0,0,.54,.7,0,.99,0,.61,.36,.46,.96,.12,.15,.09,.53,.27,.05,.13,.12,.11,0,.27,.92,.17,.6,.05,.89,.01,.05,0,0,0,0,0,.11,.15,.26,0,0,.62,.01,.09,.88,.03,.37,.71,0,.35,.37,0,.02,.22,.66,.03,.71,.2,0,0,.16,.35,.13,.02,.01,.02,.68,.03,0,.01,.93,.02,0,.88,0,.23,0,.35,.47,.15,.01,.02,0,.28,.65,.83,.19,0,.09,.08,.52,.47,.02,.09,.11,0,.37,0,.24,.3,.03,.01,.8,.66,.11,.15,.01,.97,.21,.04,.28,0,0,.48,0,.03,.89,.02,0,.04,.78,0,.05,.05,.01,0,0,.37,.21,.01,0,.12,.01,.31,.97,.28,.07,.03,0,0,0,.01,.1,.22,.24,0,0,0,0,.02,.54,.83,.46,.83,0,.64,0,0,.69,.16,.75,.07,.09,0,.08,.04,0,.74,0,0,.19,.43,.06,.89,.69,.45,.03,.02,.43,.35,0,0,.77,.34,0,0,.12,.83,0,.47,0,.01,0,.22,0,.03,.87,.05,0,.68,0,.64,.04,.03,.9,.01,.47,.31,.69,.65,0,.11,0,0,.41,.86,.89,0,.01,.02,0,.01,.05,.63,.91,.4,.01,.9,.05,0,.78,.77,0,0,.47,.23,.21,.04,.16,.78,0,0,.48,.01,.01,.67,.94,.77,0,.06,.73,0,.66,.05,.06,0,.03,0,.08,.16,.3,.21,.82,0,.62,.69,0,.56,.41,.14,.02,0,.08,.08,.78,.4,.51,0,.12,0,.54,.34,.04,0,.57,.29,.38,.46,.15,.15,.1,.58,.72,.35,.53,.17,.77,.58,.26,.01,.56,.9,.7,.82,.68,0,.16,.01,.02,.39,.02,.75,.09,.04,.02,.78,0,.67,.01,.79,.94,.42,0,.12,.01,.02,.76,.56,0,.01,.01,.13,0,.03,0,0,.11,.04,0,0,.73,.95,.1,.02,.05,.83,.88,.32,.24,0,0,.58,.02,.29,.16,.01,.27,.01,.64,0,.95,0,0,.33,.19,.76,.2,0,.87,0,.61,.98,.36,.35,.24,0,.83,.37,0,.37,.53,.02,.18,0,.06,0,.9,0,.1,0,0,0,.82,.03,.73,.27,0,.17,.2,.16,.03,.17,.23,0,.01,.51,.82,.81,.39,.03,0,.05,.02,.14,.45,0,.09,0,.11,.95,.14,0,0,.43,.11,.11,0,.03,.03,.03,.93,.24,.95,.75,0,.02,.91,.11,.01,0,0,.23,0,.59,.94,.03,.08,.02,.91,.75,.01,.01,.06,.13,0,.01,.02,0,.98,.28,.73,.35,.03,.19,.04,.52,.01,0,.05,.89,.68,.08,.05,.21,.16,.05,.33,.75,.74,0,.48,.75,.45,.07,.8,.64,.11,0,0,.02,.01,.51,.5,0,.63,.28,.59,.67,0,.14,.47,.01,0,.53,.75,.03,.08,.01,.07,.04,.03,0,.31,.19,.6,0,.19,0,.74,.98,.02,.01,0,.47,0,0,0,.21,0,.86,.21,.01,.13,.1,.15,.02,.55,0,.08,.01,.51,.03,0,.81,0,.71,.18,.31,.96,.56,0,.87,.08,0,.67,.78,.01,.16,.41,.71,0,.01,.8,.42,.01,.92,.07,.01,.89,.15,.77,0,.02,.85,.05,.3,.77,.01,.01,.03,.17,.04,.73,.1,.88,0,.02,.88,0,.18,.57,.73,.55,0,.44,.25,0,.23,.03,0,.69,.03,.25,.06,.92,0,0,0,.22,.01,.21,.19,.22,.24,.38,.04,.89,0,.98,.89,0,.27,.3,.82,0,.22,0,.26,.66,.12,.46,.67,.55,.7,.51,.27,.36,.06,0,0,0,.42,.52,.64,.97,.82,.01,.01,.52,.02,.08,0,.02,.03,.21,0,.73,.02,.05,.9,0,.03,.18,.64,.97,.01,.59,.03,.06,.01,.93,.84,.05,0,0,0,.25,.01,0,.16,.01,0,.2,.01,.04,.78,.77,.91,.04,.02,.03,.02,0,.84,.45,0,.02,0,.65,.01,.04,.88,.08,0,.11,.82,.16,.67,.1,.03,.03,.48,.08,.95,.27,.68,.27,.04,.32,0,.57,.06,.1,.09,.54,.01,0,.06,.3,.01,.79,.01,.15,.2,0,.01,0,.78,.83,.97,.42,.01,.31,.25,.04,.75,.55,0,.99,.76,.26,.97,.01,.76,.05,.47,.02,.56,.23,0,.01,.05,0,0,0,.03,0,.73,0,.03,.61,0,.09,0,0,.56,.26,0,0,.03,.31,0,.66,0,.01,.58,.92,.4,0,.75,0,.01,.91,.05,.34,.08,.32,0,.85,.01,.31,.17,.26,.13,0,.4,.13,.58,.01,.78,.44,0,.13,0,.02,.02,.69,.85,.73,0,.03,0,0,.61,0,.64,.87,.38,.81,.05,.02,0,.94,.03,0,0,.04,.39,.44,.21,0,.81,.08,.66,.57,0,0,.28,.12,.37,0,.3,.1,0,0,.02,0,0,0,.25,.73,.01,.47,0,.83,.04,.26,.17,.25,.41,.79,.01,.52,.46,0,0,0,.57,.28,.69,0,0,0,.21,.32,0,.15,0,0,0,.08,.15,.07,0,.17,0,0,.04,.3,0,.17,.19,.65,.93,.64,.73,.8,.76,.75,.03,.6,.34,.16,.36,.06,0,0,0,0,.86,.08,0,0,.59,.93,.49,.02,.02,.47,0,.78,.53,.1,.2,.01,.61,.25,0,.44,.02,.03,0,.3,.64,.01,.01,.08,.1,.31,0,.86,.75,.1,.58,0,.74,.95,0,.62,0,.92,.11,0,.97,0,.12,.32,.53,.21,0,.02,.11,0,.54,0,.03,0,0,0,.95,0,0,.1,.08,.02,.04,.11,.27,0,.01,.59,.41,.82,.11,.54,.8,.52,.08,.02,.04,0,0,.64,.8,0,.73,.01,.16,.13,.01,0,.08,.42,0,.04,0,.01,.93,.7,.34,.91,.54,0,.19,.11,0,.63,.79,.39,.28,.98,.02,.01,.51,.01,.68,.02,.11,0,.04,.28,0,0,0,.46,.21,.66,.07,.6,0,.27,0,.38,.01,.36,0,0,.72,.35,0,0,0,.05,.04,.14,.18,.01,.01,.86,.22,.51,.13,.54,.69,.04,.84,.34,0,0,.04,0,.12,.65,.39,0,.55,.02,.53,.93,.06,.01,0,.03,.01,.12,0,0,0,.72,.08,.7,.6,.48,.32,.97,0,.13,.5,0,.13,0,.04,.05,0,.2,.24,.19,.36,.13,0,.05,.82,.09,0,0,.24,.02,0,0,0,.99,0,0,.02,0,.06,.86,.83,.03,.2,.3,.67,.27,0,0,.32,.07,.38,0,.74,.46,.9,.78,.02,.33,.78,.01,.01,.41,.04,0,.06,0,.16,.11,.12,.02,0,0,0,.03,.01,0,.22,.16,.49,.06,.56,.29,0,.63,.02,.01,.71,.01,0,.13,0,.11,.06,.01,.61,.9,.09,.85,.71,.54,0,.09,0,0,.53,.3,.12,.98,0,.9,.29,.72,0,.01,0,.01,.39,.02,.01,.09,.09,0,.51,.14,.1,0,.04,.06,0,.11,.01,0,0,0,.35,.83,0,.03,.52,.02,.63,.3,.84,0,.68,.15,.46,.01,.61,.04,.12,0,.33,.01,0,1,.85,0,0,0,.03,.92,0,.07,0,0,0,0,.04,.22,0,.08,0,.07,0,0,.02,0,0,0,.26,.04,.02,0,.06,.28,0,.89,0,0,.56,0,.74,.01,.67,0,.07,0,0,0,0,0,.19,0,.57,.01,.81,0,.66,0,.02,0,0,0,.02,0,.23,.71,.07,.01,0,.95,0,.11,.07,.2,.83,.2,.67,.08,.05,.03,.61,.01,.09,.11,.36,.78,.24,.56,.02,.34,.61,.39,.02,0,.44,.04,0,.03,.83,.03,0,.87,.45,.86,.01,.09,.82,.81,.24,.12,.67,.81,0,.22,.91,.62,.01,.12,.82,0,.07,.86,.74,.72,.01,0,.81,.01,.82,.18,.51,.01,0,0,.82,0,.03,.2,.08,0,.05,0,0,.57,0,0,.45,0,.16,.38,.95,.91,.91,.4,.06,.45,.22,.02,0,.97,0,.01,0,.23,.34,.37,.22,.24,0,.14,.37,.16,.65,.48,.49,.01,0,.02,.23,.02,.74,.29,.01,.72,.29,0,.12,0,0,.05,.43,.01,.74,.01,.04,.53,0,.1,.16,.59,.01,0,.02,.5,.06,.46,0,.07,.36,.02,.02,.17,0,.74,.29,.45,.15,.29,.68,0,0,.66,.31,0,.61,.52,.03,.02,.33,0,.68,0,.03,0,0,.11,.23,.97,.97,.27,0,0,0,.06,.08,.24,.03,.21,.01,.51,.01,.13,.04,.78,.35,.12,.06,.07,0,.23,.02,.65,.08,.03,0,.03,.01,.61,.74,.08,0,0,.05,0,.12,.8,.26,.49,0,.83,.02,.17,.91,.85,.17,.06,.03,.01,.08,0,.22,.17,.79,.04,.23,.04,.86,0,.22,0,.07,0,.61,.53,.24,.92,.59,0,.04,0,.11,.1,0,.01,0,.75,.03,.01,.69,.14,.59,0,0,.01,0,.01,0,.33,.02,.03,.22,.39,.12,.03,.02,.56,.54,.23,0,.92,.24,.86,.05,0,0,0,.54,0,.18,.61,.32,.09,.01,0,.57,.01,.06,.55,.11,.06,.05,.24,0,.16,.54,.7,.8,.55,.29,.28,.02,.03,0,.31,.08,.92,.32,0,.61,.65,.41,.02,.1,.89,.64,.34,0,0,.09,.25,.04,0,.01,.12,.78,0,.13,.85,.89,.67,.57,.01,.17,.24,.05,.69,.17,.34,.3,0,.01,.59,.19,.07,.14,0,.62,.14,.05,.58,.42,.54,.91,.01,.15,.83,.22,0,.18,.01,0,0,.07,.19,.92,.01,.15,.59,0,0,.03,0,0,.69,.05,.44,.11,.07,.02,0,.49,.96,.24,.34,.28,0,.03,.28,0,.31,0,0,.06,0,.03,.55,.01,0,0,.44,.12,.07,.12,.28,.88,0,.66,0,.15,.02,.01,0,.03,.36,0,.06,.49,.93,.27,.18,0,0,.13,.43,0,0,.95,.91,.17,0,.46,.96,.45,.34,.14,0,.47,0,.04,.04,.76,.37,0,.02,.55,.08,.16,.95,.06,.02,0,.25,0,.02,0,.59,.17,.01,0,0,0,.91,.51,0,.3,.88,.3,.17,.41,.08,.02,.93,.04,.86,.32,.79,0,.55,.03,.06,.25,.75,.02,.24,.06,.29,.9,.07,.01,.63,.12,.02,.05,0,0,0,.81,.42,.05,.54,.99,.98,.01,.76,.58,.87,0,.52,.01,.38,.48,.64,.63,.97,0,0,.43,.08,.41,.11,.27,.03,.22,0,0,0,.12,.08,.77,0,0,.12,.53,.61,.41,.54,.3,.15,0,.57,.9,.37,.56,.04,.58,.03,.32,.03,.27,.03,.14,.01,.12,.02,.01,.03,.19,.47,.35,.04,.05,.08,.11,.38,.03,.88,.6,.01,.25,.83,.87,.05,.19,.01,.36,0,0,.23,.36,.11,.26,0,.62,.04,.35,.43,.94,.05,.58,.24,.07,.6,.01,0,.57,.03,.57,.03,.01,.25,0,.7,0,.02,0,.63,.04,.25,.57,.03,.11,0,.19,.01,.05,.86,.08,0,.01,.01,.29,.12,.04,.04,.75,.03,.5,.81,.03,.26,.21,.33,.18,.61,0,.01,.01,.84,.3,.99,.07,.73,.89,.26,0,.83,0];export{a as pvalData};
