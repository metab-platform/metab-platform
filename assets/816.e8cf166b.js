const a=[.81,.86,.01,.6,.11,.2,.35,0,.01,.78,.31,.2,.41,.84,0,.75,.1,.41,.51,.22,.4,0,.18,0,.96,.53,0,.11,.36,0,.01,0,.96,.33,0,.87,.03,.02,.07,.44,.61,.93,.55,.86,.12,.11,.14,.8,.03,0,.4,.37,.06,.18,0,.52,.75,.08,.53,.97,0,.49,.36,.58,.59,0,.55,0,.81,.56,.6,.18,0,.17,.2,.09,.64,0,0,0,.78,.74,.21,.26,.16,0,.22,.72,.64,.03,0,.16,0,.03,.05,0,.18,.02,.29,0,.98,.77,.02,.32,0,.16,.12,.18,.36,.05,.39,0,.23,.09,.58,.06,.02,0,.38,.22,.31,.04,.39,.06,.02,0,.49,.89,0,.14,0,0,.49,0,.01,.87,0,0,0,.08,.11,.16,0,.21,.81,.17,.44,.02,.02,.65,.99,0,1,.91,0,0,.26,.25,.6,.01,0,.21,.27,0,0,0,.56,0,0,.64,.64,0,0,0,.05,0,.31,0,0,.57,.53,.97,.13,0,0,.01,.04,.86,0,.97,.38,0,.75,0,0,.08,.07,.05,.24,0,.52,0,.28,.54,.11,.01,.04,0,0,.11,0,.03,.55,.19,.14,0,.6,0,0,.19,.01,0,.39,.14,0,.22,0,0,.02,.03,.73,.13,.84,0,.15,.49,.01,.06,.22,.93,0,0,0,0,0,0,.07,.05,.05,.38,0,.77,0,0,.48,.79,.72,.23,.55,0,.3,0,.05,.19,0,0,.06,.15,.62,.91,.01,.46,.21,.01,.51,.65,0,0,.4,.03,0,0,.05,.07,0,.02,0,.15,.25,0,0,0,.18,0,0,.5,.54,.02,.19,0,.48,.01,0,.2,.93,.04,.5,0,0,.63,.18,.47,.76,.52,.97,0,.08,0,.01,.31,.08,.98,0,.47,0,0,.41,.34,.19,0,.16,0,.01,.94,0,.19,0,0,0,.01,0,.14,.97,.99,.03,.07,.81,0,.88,0,.01,0,.74,0,.54,.06,.03,.2,.23,0,.65,.71,0,.33,.35,.24,.57,.14,0,.59,0,.58,.06,0,0,0,1,.59,.5,0,.68,.93,.98,.85,.8,.29,.11,.51,.67,.71,.2,.49,.71,.03,.05,.01,0,.52,.47,.09,.05,0,.16,.02,0,.86,0,.63,.11,.11,.01,.07,0,.29,.05,.95,.23,0,0,.01,.48,.34,0,.54,.39,.07,.28,.2,0,0,0,.01,.19,.99,0,.01,.22,.52,.2,.38,.07,.09,0,.48,0,0,.03,.06,.27,.01,0,0,.68,0,.86,.03,0,.16,0,.04,.02,.16,.42,0,.22,.42,.52,.8,.12,.08,.12,.04,.35,.05,0,.58,.31,0,.07,0,.01,.01,.23,0,.01,0,.1,0,.64,0,.18,.18,.22,0,.11,.39,.01,.85,.98,0,0,.61,.61,.28,.52,.02,.06,.49,.22,0,.19,0,.04,0,0,.05,.02,0,0,.54,.06,.04,.01,.87,.04,.25,.08,.21,.61,.01,0,.01,.23,0,.85,.28,0,.61,0,.51,.11,0,.97,0,.15,.52,0,0,.18,.13,0,.2,.08,0,.06,.78,.07,0,.24,.22,.04,0,0,0,.39,.74,.13,.6,0,1,.04,0,.52,0,.38,.01,.83,.3,0,.68,.05,.87,.04,0,0,0,.05,.15,.01,.01,.58,.78,.57,.93,0,.62,.52,0,.03,0,.58,.13,0,0,.01,0,0,.91,.47,.53,.59,.01,.22,0,.18,1,.03,0,.05,.86,0,0,.01,.22,0,.04,0,0,.32,0,.77,.82,.45,0,.7,.06,.79,0,0,0,.01,.2,0,.5,0,.2,0,.29,.66,0,.03,.44,0,.11,.61,.74,0,.18,.25,.7,.01,.55,.41,0,.73,.9,.86,0,.01,.64,.03,.47,.92,0,.04,0,0,.11,.6,.49,.32,.01,.58,.97,0,.09,.55,.3,.33,0,.31,.6,0,.38,.3,.16,.27,.59,.17,.86,.16,0,0,.25,.26,.21,.42,0,.83,0,.4,0,.12,0,.7,.76,0,.11,.48,.52,0,.73,.02,.13,.76,.06,.67,0,.33,.05,.58,0,.73,.03,0,0,.03,.43,.71,.06,.22,.96,0,0,.95,.74,.02,.02,0,0,.34,.43,.02,0,.11,.36,.82,0,.34,.01,.01,0,.93,.17,0,0,.58,.31,.16,.64,0,0,.86,.4,0,.07,0,0,.38,0,.04,.31,.54,.16,0,.2,0,0,1,0,0,0,.49,0,.7,0,.04,0,0,0,0,.89,.95,.79,.02,0,0,.34,0,.86,.31,.11,.57,0,.01,0,.16,.01,.63,.27,.05,.5,0,.81,.88,.17,.74,.03,.49,.16,0,.25,0,.96,.38,.01,0,0,.62,0,.03,.88,.1,0,0,.11,.12,0,0,.4,.2,0,0,.75,.53,.02,0,0,0,.22,0,.15,.96,.62,0,0,.07,.98,0,0,0,.27,.05,0,0,0,.79,0,.85,.98,0,.6,.03,.43,.02,.03,0,.05,.65,0,.16,.07,.7,0,.79,.93,.74,.51,.49,.78,.11,.32,.82,.91,.21,.14,.18,0,.05,0,.32,0,0,0,.88,0,.69,0,0,.61,0,.22,.01,.52,.6,.02,.86,.02,.22,0,0,.02,.02,.59,.37,.05,0,.64,.52,.66,.01,.1,.01,.03,0,.09,0,.18,.7,.72,0,.59,0,.66,0,.3,.7,.86,.95,.17,.42,.1,0,.19,.19,.2,.12,.04,.41,.53,.02,.01,0,.26,.51,.67,.01,0,0,.12,.32,0,0,0,0,0,0,.69,.3,.18,0,0,0,0,.15,0,.17,.61,.46,.6,.37,.16,.55,.72,.32,0,.19,.34,.38,.88,.69,.02,0,0,0,.17,0,.01,0,.44,.62,.14,.66,0,.83,0,.14,.54,.37,.66,0,.91,.68,0,.49,0,.26,0,.46,.49,0,.01,0,.46,.72,0,.66,.07,.29,.25,0,.19,.97,0,.33,.25,.24,0,0,.32,0,.45,.06,.8,0,0,0,.07,.02,.8,0,0,.01,.01,.71,0,0,0,.11,.19,.51,0,.48,.35,0,0,.98,.05,0,.01,.98,0,.34,0,0,.1,0,0,.66,.64,0,.05,0,.39,.07,.03,.9,.86,.31,.56,.99,0,0,.51,.1,.02,.51,.67,0,.81,.19,0,.03,.3,.62,.24,.9,0,0,.23,0,.46,.07,.08,.85,.04,.31,0,.86,.01,.79,0,.84,.26,.25,.74,.89,0,.07,0,.81,.87,0,.38,.65,0,.56,0,.85,.3,.43,.12,.49,0,.24,.24,.22,.6,.69,0,0,.07,.36,0,.01,.41,.01,.26,.29,.54,0,.33,.6,0,.63,.51,.11,.03,.75,0,.45,0,0,.83,.62,1,.99,.7,.2,.1,.09,.16,.22,.73,0,.04,0,0,0,0,.08,0,.64,0,.11,0,.35,.12,.01,0,.02,.24,.23,.77,.71,0,.76,0,0,0,0,.02,.37,.41,.01,.3,.5,.74,.65,.54,.03,.88,.04,.22,.71,.77,.05,.87,0,.31,.27,.74,.58,0,.33,.54,0,.33,0,.67,.95,.03,.32,0,.01,.71,0,0,0,.32,.09,.25,.15,0,.49,0,.95,.58,0,.35,0,.08,.93,0,.47,.41,.02,.08,.28,.96,.83,.49,.19,0,0,0,.69,.52,.11,.06,.38,.02,.17,.26,.23,0,0,0,.23,0,.05,.08,.02,.46,0,.09,0,.03,.04,.26,0,0,.74,0,0,0,0,.41,.09,0,.14,1,0,0,.42,.39,0,.22,.23,.01,0,.03,.05,.58,.76,.02,.02,0,.54,.21,0,0,.69,.03,0,0,0,0,0,0,.25,.15,.24,0,0,0,.01,0,.92,0,.4,.03,0,0,0,.08,0,0,.01,0,.08,0,0,.83,0,.69,.79,.98,0,.32,0,.18,0,0,.11,0,0,.25,.21,.84,0,.79,0,.03,.41,0,.27,0,0,.16,.1,.85,.51,0,.08,.02,.04,0,.06,.46,.74,.86,.76,0,.16,.59,.82,.9,.36,.73,.92,0,.7,0,1,.16,.43,.48,0,.13,0,0,0,.89,.49,0,.22,.09,.65,.67,.31,0,.13,.18,.53,.07,.37,0,.01,.27,.56,.02,.41,0,0,.51,.17,.12,.02,1,0,.95,0,0,.79,.48,.02,.28,0,.53,0,.83,.78,0,0,.92,0,.26,.03,0,0,.54,.01,0,.64,0,.37,.28,.9,.72,.2,0,.39,0,.7,0,.12,0,0,.6,.5,.31,.14,0,.17,.81,.84,.07,.03,.29,0,0,0,.99,.01,.25,.26,.89,.75,0,0,.39,0,0,.37,.29,0,.46,0,.04,.3,0,.07,.05,.18,0,0,0,.01,0,0,0,.01,.84,.03,0,.01,0,.05,0,.62,.02,.45,.09,.01,0,.15,0,0,.71,.52,.03,.07,.08,.73,.3,0,0,0,0,0,.74,.69,.98,.03,0,0,.01,.28,.74,.41,.36,.21,0,.44,0,0,0,.68,.46,.33,0,.75,0,.09,.09,.09,.6,0,0,0,.07,.2,.18,0,.04,0,0,0,.01,.69,.18,.35,0,.33,.01,.18,.27,.15,0,0,.42,.72,.57,0,.17,0,.81,.02,0,.01,.09,0,.86,0,0,.61,.87,.02,.02,.09,.08,.08,.45,0,.53,.04,0,0,0,.34,.06,.02,.12,.53,0,0,0,.01,0,.02,0,.15,0,0,.1,.91,.28,0,.01,.93,.36,.49,0,.88,0,.55,.16,0,0,.38,0,.02,.26,.59,.53,.24,0,0,.03,0,.15,.21,.44,.17,.5,.01,0,.06,.5,.47,.86,0,.03,0,.06,0,0,.27,.17,.99,0,0,0,.93,.51,0,.53,.03,.44,.94,0,0,0,0,.6,0,0,0,.15,.77,0,.25,.2,.53,.3,0,1,.49,.5,.11,.21,.46,.17,0,.15,.2,.05,0,.93,0,.52,.03,0,.3,.07,.34,.76,.1,.08,.1,.27,.01,0,.01,0,0,.01,.33,.78,.04,.49,.13,.88,.48,.71,.01,0,0,.57,.36,.37,.54,0,0,0,.09,.27,.59,.79,0,0,.12,.14,.69,.07,0,.87,.01,.03,.05,0,0,.02,.79,.71,.62,.33,.22,.42,0,.17,0,.64,.07,.03,.01,0,.04,0,.01,.45,.7,.41,.19,.61,.82,.06,0,0,0,.46,.36,.74,.02,0,.55,.06,.75,.57,.3,.04,0,.84,0,.1,.08,0,0,.62,.08,.04,.14,0,.1,0,.84,0,.21,.07,.58,.38,.21,0,0,0,.78,.52,.02,.11,.37,.03,.88,.72,.11,.23,.83,.91,.94,0,.02,0,.01,.75,.89,.22,.66,.01,.14,.84,.34,.69,0,.67,.38,.77,0,0,0,0,.01,.09,.06,.53,.56,.18,.03,.04,.48,.1,.93,0,.77,.02,.45,.25,.97,.73,0,.01,0,.48,.12,.12,.04,.13,.13,.02,0,.63,.04,.22,0,0,0,0,.27,.09,.25,.01,.43,0,.54,0,0,.97,.76,.04,.26,.27,0,.27,.15,.19,0,.01,0,.09,.18,0,.63,.01,.6,.51,.01,.25,.07,0,.06,0,.07,0,.36,.37,0,.35,.14,0,.5,.7,0,.03,.12,.06,0,.79,0,.01,.01,.31,.78,.55,.14,.25,.17,.72,.8,.33,0,.01,0,.16,.23,.13,.95,0,.02,.12,0,0,.09,.33,.82,.25,.24,.28,0,.23,0,0,.6,.25,.73,.02,0,.96,.18,.08,.24,.95,0,.52,0,0,.01,0,.64,.22,.25,0,0,.81,0,.7,.77,.02,.19,.02,.38,.81,.08,0];export{a as pvalData};
