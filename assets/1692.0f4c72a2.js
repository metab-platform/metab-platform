const a=[.39,.39,.58,.34,.27,.7,.54,0,.09,.11,.04,.06,.52,.12,.14,.86,.92,.22,.27,.66,.54,0,.22,.03,.78,.13,0,.1,.23,0,.51,0,.71,.99,0,.54,1,.7,.01,.12,.49,.23,.56,.73,.05,.61,.09,0,0,0,.01,.66,.95,.03,0,.69,.46,.08,.04,.43,0,.38,0,.65,0,0,.1,.1,.53,.35,.08,.82,0,.05,.39,.56,.13,0,.04,0,.39,.4,.62,.35,.02,0,.79,.99,.17,.22,0,.96,0,.36,.05,.86,.61,.12,0,0,.64,0,0,.88,0,.72,.55,.54,.97,0,.31,0,0,.39,0,.67,.03,0,0,.51,.06,0,.68,.62,.23,0,.63,0,0,.81,0,.59,.69,0,.02,.05,0,0,0,.28,.06,.84,0,.64,.94,.06,.6,0,.07,.61,.01,0,.13,.33,0,.09,.01,.1,.77,.29,0,0,.62,.02,0,0,.65,0,.28,.41,.53,0,0,.11,.07,0,.96,0,0,.85,.36,.55,.23,.49,0,.71,.88,.32,0,.04,.47,0,.41,0,0,.86,0,.07,.39,0,.05,.04,.53,.47,.18,.1,.12,0,0,.11,0,.1,.06,.6,.12,.05,.15,0,0,.11,.05,0,.17,.24,.17,.63,0,0,.11,0,.34,.93,.41,.14,.52,.57,.02,.59,.15,.81,0,.08,0,0,0,.02,.62,.01,.06,.54,0,0,0,.08,.26,.66,.77,.15,0,.31,.37,.09,.01,.08,.12,0,.01,.16,.3,.21,0,.91,.77,0,.03,.61,0,0,.05,0,0,.02,.07,.64,0,.11,.02,.77,0,0,.23,0,.54,.02,0,.69,.61,.05,0,0,.97,.83,0,.12,.88,.52,.06,0,.38,.44,.4,.56,.58,.99,.13,0,0,0,.01,0,.06,.07,.31,.05,0,0,.66,.01,.21,0,.27,.14,.04,.45,0,.62,0,.41,.8,0,0,.67,.49,.45,.55,.24,.35,0,.42,0,0,0,.66,.01,.72,.06,.02,.51,.01,.35,.48,.17,.01,.83,.38,.95,.18,.58,.05,.88,0,.95,0,.54,.08,.01,.23,.15,.69,0,.6,.72,.38,.46,.51,.95,.67,.38,.49,.72,0,.52,.95,.05,.26,.99,0,.96,.07,.15,.01,.86,.03,.01,0,.15,.36,.03,0,.48,0,.26,.1,0,.49,.5,.05,.08,0,.04,.81,.45,0,.07,.99,.87,.9,.56,.02,.02,0,.61,.53,.65,0,.04,.43,.32,.44,.02,0,.15,.02,.9,0,.04,.9,.39,.06,0,.02,0,.14,.33,.79,.05,0,.51,.28,.14,.01,.11,.34,0,.28,.21,.97,.2,0,.05,.3,.87,.8,.98,0,.66,.02,0,.85,0,0,.83,.71,0,0,.8,0,.11,0,.06,.86,.1,.1,.06,.19,.82,0,.59,.41,.01,0,.43,.01,.24,.02,.61,.02,.85,.84,0,.01,.51,.02,.36,0,0,.02,0,0,.19,.05,.64,.09,.48,.49,.3,.12,.26,.04,.3,0,0,.11,0,.58,.04,.02,.65,.41,.25,1,0,.99,0,0,.7,.52,0,0,.73,0,.65,.04,.04,.01,.63,0,.03,.84,.48,0,0,.14,0,.03,.06,.19,.85,.01,.78,.02,.11,.02,.02,.44,.6,.75,0,0,.85,0,.73,0,.78,0,.04,.91,.01,0,.94,.21,.75,.84,.03,0,.42,.18,.24,.14,.01,.13,.17,.59,0,.52,0,0,0,.61,.86,.99,.91,.2,0,.09,.1,.92,.02,.08,.26,.01,.8,.14,.74,.15,.01,.02,.52,.01,.01,.83,.32,.52,0,.73,0,.81,0,.01,0,.01,.72,0,.26,.92,.11,.95,.01,.32,0,.04,.03,0,.66,.66,.29,.9,.45,.77,.83,.94,.78,.51,.01,.78,.97,.49,.83,.2,.48,0,.09,.84,0,0,0,0,.22,.06,.36,.05,.18,.39,.07,.23,.23,.62,.06,.25,.07,.62,.14,.81,.54,.32,.04,.69,.7,0,.04,.17,0,0,.32,.14,.5,.28,.46,.74,0,.15,0,0,.02,.24,.51,.16,.98,.62,.32,0,.04,.98,.3,.19,.12,.81,0,.14,.02,0,0,.93,.58,0,0,.84,.1,.68,.13,.05,.93,0,0,.1,.54,0,.93,.09,0,.35,0,.01,.43,.02,.07,.04,0,.44,.85,.22,0,.97,.01,0,.23,0,.95,0,.7,.81,.23,.45,.87,0,.03,0,0,.75,0,.57,0,.63,.03,.1,0,0,0,0,0,0,.89,0,.41,.45,0,.32,.01,.04,0,.13,.18,.88,.02,.94,.15,.03,0,.04,.99,.81,.35,.76,0,.08,0,.95,0,.29,.98,.53,.43,0,.39,.83,.65,.24,.05,.06,.58,.12,.62,0,.15,.98,.03,.25,0,.34,0,.26,.36,.57,0,0,.01,.42,0,0,.23,.64,0,0,.51,.23,.61,.06,.01,0,0,0,.24,.06,.68,.24,.01,0,.39,.02,0,.37,.1,.67,0,.52,.01,.69,.01,.3,.8,0,.08,.74,.03,.57,0,.01,.19,.3,.01,.05,.57,.58,0,.43,.15,.24,.52,.24,.3,.65,.7,.68,.62,.45,.78,.95,0,.24,0,.7,0,0,.24,0,.39,.91,0,0,.7,.56,.45,.25,.33,.3,.26,.68,.56,.26,.01,0,.07,.83,.4,.34,.36,0,.53,.01,.28,.02,.14,.17,.28,.45,.07,0,.91,.38,.32,0,.56,.55,.01,0,.71,.15,.48,.19,.19,.94,.83,.03,.92,.09,.75,.3,.13,.04,.44,.15,.07,.01,.12,.14,.28,0,0,0,.84,.05,0,0,0,0,0,0,.34,.27,0,0,0,0,0,.09,0,.7,.27,.6,.97,.28,.98,.57,.86,.39,.01,.27,.71,.78,.03,.06,0,0,.01,.33,.43,.02,.1,.4,.85,.06,.12,.31,0,.09,.15,.02,.8,.74,.02,0,.86,.22,.02,.27,0,.58,.04,.39,.64,.22,.84,.01,.5,.33,0,.24,.77,.07,.23,0,.03,.74,0,.68,.47,.15,.16,.42,.94,0,.06,.04,.19,0,.08,0,0,.56,.38,0,0,.14,.72,0,.12,.26,0,.32,.15,.86,0,.87,.2,0,0,.11,.79,0,.34,.82,.11,.03,0,.05,0,0,.77,.21,.95,.07,.02,0,.19,.82,.05,.86,.38,.5,.27,.55,0,0,.23,0,.02,.82,.35,0,.83,0,.27,.04,.73,.17,.76,.17,.74,.01,.19,0,.44,.21,.62,.85,.46,.31,.36,.96,.12,.79,0,.35,.08,.06,.86,.42,.78,.52,.32,.59,0,0,.1,.97,0,.94,.01,.6,.76,.82,.25,.57,0,.84,.22,.06,.02,0,0,0,.09,.22,0,0,.88,.92,.83,.16,.11,0,.3,.05,0,.81,.94,.4,.69,.01,.06,.87,.89,.35,.07,.37,.06,.41,.01,.02,0,0,.01,.72,.02,.04,0,.75,.07,0,0,.37,.16,.21,0,.54,.03,.38,.19,.03,.38,.26,.09,.86,.9,.7,.01,.63,0,.72,.05,0,0,0,.01,.48,.07,.04,.19,.58,.84,.68,.11,.18,.62,.9,.46,.16,.87,.2,.42,.02,.76,.31,.03,.16,.1,0,.55,.01,.02,.05,.87,.08,.02,.06,0,0,0,0,.53,.04,.71,0,0,.05,.01,.56,.06,.05,.51,0,.61,.15,0,.74,.48,1,.44,.57,.64,0,.58,.01,0,.11,0,.06,.04,.23,0,.89,.04,.11,.35,.45,.46,0,.36,.56,.24,0,.74,.18,0,.51,.09,0,.54,.94,.85,0,.43,.77,.1,0,.14,.29,.04,0,0,.77,.24,0,.27,.77,0,.02,.54,.83,0,.05,.83,.8,0,.07,.26,.22,0,.48,.08,0,0,0,0,.09,0,0,0,.25,0,.02,.01,.63,.75,.02,.05,0,0,.61,.69,.01,.26,0,.16,0,.26,.65,.11,.05,.51,.1,.51,.18,.32,0,.05,0,.88,0,0,.01,.01,.01,0,.9,0,0,.55,.78,.2,0,.94,.06,.07,.01,.29,.76,0,0,.8,.03,.09,.36,.87,.13,.79,.08,0,.04,.62,0,.68,.03,.03,.29,.3,.21,.16,.44,.68,.47,.07,0,0,.05,.69,.63,.05,0,.91,0,.92,.01,.19,.75,0,.7,0,.27,.21,.59,.3,.56,.51,.02,.06,.37,0,0,.81,.93,0,.17,0,0,0,.54,.67,.27,.05,0,.15,.29,0,0,.81,0,.01,0,.16,.17,0,.98,0,0,.05,0,.31,.23,0,0,.26,0,0,.96,.09,.85,.83,.17,.56,.92,.52,.07,0,.06,0,.23,.04,.04,.14,.08,.35,.01,0,.03,.33,.04,.56,0,.33,0,0,0,0,.31,.11,.16,.29,.31,0,.92,.25,0,.64,0,.26,0,.72,0,.96,.26,0,0,0,.04,.84,.04,0,.03,.81,.12,.09,0,0,.46,0,.08,.79,.08,0,.97,.11,0,0,0,0,.23,0,.05,.01,.09,0,.42,.04,.89,.07,0,0,0,.19,.01,.64,0,.25,0,0,0,.54,.17,.8,0,0,0,0,.11,0,.46,0,.01,.5,.01,.56,.92,0,.05,.06,.47,.01,.99,0,0,.14,.07,.01,0,.01,0,0,0,0,.42,.01,.48,0,.21,0,.8,.44,.04,.14,.61,.19,.01,.3,0,.89,0,0,.04,.02,.02,.06,.67,.23,.01,0,.08,.58,.46,.04,0,.04,.02,0,.87,.41,0,0,0,0,.05,.95,.84,.03,.31,0,.05,0,0,0,.89,0,.77,.03,0,.81,0,.43,.15,0,.59,.07,.11,0,0,0,0,.09,0,0,.78,0,.37,.22,.35,.3,.96,.17,0,.09,0,.39,.04,.11,.64,.71,.77,.49,.42,.73,.01,.43,0,0,0,.95,.1,.61,.13,.99,0,0,0,.01,.12,.05,.04,.35,0,.3,.71,.18,.01,.05,0,.09,.04,.01,0,.12,.67,.19,.66,.8,0,.43,.47,.15,.73,.82,.52,0,.33,.01,0,.59,.45,.15,.9,.53,0,.01,.39,.2,.56,.36,.25,.02,0,0,.04,.53,.87,.57,0,.3,0,0,.16,.19,.76,.17,.2,.79,.02,.16,0,0,.23,.79,.12,.53,.03,0,0,.04,.2,0,.09,.01,.03,0,.31,.62,.48,.11,0,.61,.01,.73,0,.16,.86,.83,.06,.48,0,.33,.2,.21,.01,.79,.01,.81,.63,0,.05,0,.27,0,.28,.01,.47,.37,.29,.93,.79,.06,.19,.07,.03,.25,.13,.6,.59,0,.87,.41,.38,0,.14,.59,0,.13,0,.27,.01,.51,.92,.07,.7,.07,.9,0,0,0,.13,.06,.1,.01,.07,.45,.68,0,0,0,.93,.75,.71,.88,.37,.04,.35,.93,0,0,.82,.11,.86,0,.22,0,.02,.82,.03,.69,.06,.96,.01,.16,.03,.38,.02,.71,.02,.05,0,0,0,0,.12,.02,.01,.03,0,.59,.25,.44,.05,.97,.21,0,.05,0,.3,.38,.68,0,.01,.24,.01,.92,.84,.57,.16,.95,.66,.56,0,.91,.89,.37,.1,0,.07,.37,.6,.25,.37,.01,0,0,.17,.01,0,.29,.83,.04,.02,.39,.04,.74,.12,.33,.94,.76,0,.27,.5,0,.13,.83,.25,.44,.68,.02,.34,0,.78,0,.24,0,.02,.79,.04,0,.63,0,.83,.02,.01,.24,.05,.03,0,.38,0,.04,.02,.14,.24,.25,.39,.97,0,.81,.08,.17,0,.53,.24,.67,.01,.82,.16,.53,0,.83,0,0,.48,.98,.3,.23,.3,.08,.04,.01,.74,.47,.21,.88,.93,.97,.3,.46,.02,.04,.11,.01,0,.77,0,0,.25,0,.99,0,0,.04,0,.48,0,0,.44,0,.41,.73,.81,.79,.47,0];export{a as pvalData};
