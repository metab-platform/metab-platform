const a=[.82,.15,.01,.23,.35,.03,.33,.23,.27,.1,0,.62,.06,.28,0,.43,.51,.23,.08,.75,.67,.44,.25,0,.06,.66,.32,.29,0,.1,.88,.91,.14,.82,.13,.77,0,0,.58,0,.25,.58,.97,.28,.98,0,.88,.32,.18,.41,.11,.8,.03,.04,.36,0,.04,.71,.19,.45,.67,.15,.29,.38,.01,.77,.54,0,.58,.33,.83,0,.15,.24,.37,.09,.42,.95,0,.16,.19,.5,.2,.38,.35,.34,.72,.37,.16,0,.01,.15,.62,.05,.06,0,.9,.07,0,.25,.46,.16,.63,.68,.39,.91,.7,.92,.37,.94,.08,.85,.96,.15,.31,.15,.5,.51,.01,.18,.93,.58,.06,.06,.4,.95,.47,0,.77,0,.04,.52,.57,.16,.12,.01,.21,.81,.39,.96,.96,.71,.13,1,.72,.15,.79,0,.98,.77,.17,.1,.61,.11,.08,0,.01,.26,.28,0,.11,.51,.97,.95,.53,.78,.47,.78,0,.44,.81,.1,.01,.09,.13,.54,.57,.3,.54,.14,.92,.96,.92,0,.23,.03,.02,.28,.44,.5,.23,.52,.85,.89,.51,.01,.2,.19,.35,.56,0,.17,.01,.14,.97,.39,.6,.06,.45,.11,.19,0,.09,0,.85,.29,.39,.13,.78,.14,.01,.32,.27,.03,.04,.01,.15,.76,.65,.09,.28,.15,.16,0,.75,.89,.01,0,.21,1,.53,0,.02,0,.38,.64,.99,.25,.24,.86,.53,.02,.24,0,.74,.98,.33,.03,.62,0,.01,0,.16,1,0,.29,.68,.28,.02,.05,.49,.08,0,0,.1,.41,.24,.51,.01,.17,.18,.14,0,.01,0,.13,.04,0,.7,.13,.62,.15,.68,.34,.13,.7,0,.37,.26,.39,.59,.1,.6,.23,.13,.08,.03,.37,0,0,.7,.35,.1,.87,.01,.35,.85,0,0,.08,.27,.81,0,.64,.81,0,.9,0,.79,0,.16,.25,.16,.71,.34,.33,.39,.05,.18,.67,.96,.54,.16,.61,0,.01,.98,0,.61,.04,.9,.23,.6,0,.09,0,.59,.97,.03,0,.03,.39,0,.69,.73,.21,.38,0,.04,.53,.04,.71,.1,0,.75,.23,.04,.22,.32,0,.98,.22,.81,.16,.66,.28,.36,.6,.09,.15,0,.16,.28,.09,.04,.08,.98,.56,0,.45,.24,0,0,.41,.34,.77,.01,.04,.78,.01,0,.41,0,0,.16,.23,.56,.76,.19,.01,.64,.01,.43,.53,.28,.03,.01,.58,0,.18,.03,0,.22,.63,.09,0,.07,.99,.19,.4,.36,.7,.35,.16,0,.09,.02,.95,.33,.67,.02,.76,.14,0,.85,0,.21,0,0,.06,.06,.5,.37,.37,.25,.5,.26,.9,.54,.01,.42,0,.02,.02,0,.16,0,0,.01,.26,.86,0,.89,.7,0,0,.35,.01,.02,0,.54,.68,.6,.01,.13,.17,.99,.04,.06,.01,0,0,.08,.49,.45,.2,0,.12,.14,.52,.66,0,.86,0,0,.01,.45,.68,.45,.44,.34,.21,.08,.41,0,.6,.06,.03,0,.5,.21,.89,.92,.65,.76,.62,.02,.47,0,.56,.08,0,.14,.85,.42,.17,.15,.8,0,0,.01,.01,0,0,.06,.37,1,0,.83,.73,0,.28,0,.43,.12,.77,.67,.3,.96,.43,.04,.02,0,.84,.87,.02,.57,.37,.94,.05,.56,.11,.17,0,.46,.01,.02,.72,.33,0,.63,.97,.38,.03,.17,.16,.07,.03,.21,.02,.1,.08,.2,.08,.32,.36,.03,0,.2,0,.34,0,.02,.69,.31,.16,.12,.53,.2,.42,.03,.43,.15,.44,0,.69,.54,0,.31,.89,.98,.03,.21,.45,.49,.05,.15,.62,.52,.55,.63,.93,.79,.72,.34,.62,0,.87,.37,.6,.81,.3,.03,.11,.14,.29,0,.17,.3,.83,.15,.43,.08,.02,.15,.39,.45,0,.52,.72,.25,.5,.46,.14,.62,.01,.4,.18,.03,.94,.86,0,.41,.23,0,.37,.95,.66,.52,.22,.25,0,0,.45,.95,.73,.01,.45,0,.21,.26,.18,.7,.07,.59,.64,.32,.41,.17,.62,.19,.36,.11,.04,.95,.88,.36,.32,0,.45,.51,.8,0,.73,.89,.26,.57,.68,.53,.75,.5,.17,.14,.85,.69,.07,0,.14,.31,.62,.01,.25,.44,1,.12,.59,.7,0,.11,.53,.29,.02,.35,0,.01,.34,.04,.83,.94,.44,.26,.82,.38,.41,.35,0,.68,.05,.38,.15,0,0,.27,.8,0,.93,.49,.76,.29,.01,.05,.84,.01,.81,0,.45,.07,.72,0,.26,0,0,.86,0,.76,.84,.02,.38,0,.06,.64,.6,.71,.47,0,.03,.05,.15,.01,.83,.3,.05,.15,0,.17,0,.23,.09,.56,.39,.28,.75,.29,.18,.99,.01,.28,.36,.2,.84,0,.01,0,.16,.14,.59,.05,.58,.25,.98,.44,.37,.07,0,.15,.08,.39,.74,.74,.09,.74,.53,.62,.79,.6,.02,.01,0,.58,.08,.78,.02,.05,.84,0,0,.4,.84,0,.21,.01,.31,.54,0,0,.02,0,.51,.88,.63,.45,0,.39,.34,0,.26,0,.01,.89,.54,.62,0,.13,.32,.91,.74,.9,.89,.18,.08,.85,.26,.25,.35,.65,.09,.66,.03,.87,.21,.75,.94,.72,.08,.17,0,.91,.12,.01,.34,0,.15,.51,.42,.95,.22,.42,.01,.88,0,.57,0,.28,.72,.74,.08,.73,.13,.32,.74,.09,0,0,.64,0,.24,.82,0,.43,.21,.14,.8,0,.02,.06,.08,.86,0,.81,.28,.46,.16,.5,.97,.45,.86,.73,.13,.04,.42,.9,0,0,.66,.11,0,.02,0,.24,.19,.17,.06,.14,.19,.12,.07,.05,.21,.17,.6,.25,.28,.04,.87,.17,0,.25,.55,.78,.93,.79,.22,.56,.66,.46,.01,.18,.97,.27,.74,.04,.98,.04,.19,0,.51,.09,.28,0,.82,.78,.24,.1,.16,.07,0,.02,.83,.33,.55,.08,.93,.46,0,.14,.41,.02,.17,.12,.79,.53,.03,.92,.42,.52,0,.74,.57,.79,.27,.83,.01,.88,.46,.46,.06,.06,.1,0,.54,.02,.66,.02,.66,.53,0,.86,.05,0,.96,.08,.71,.06,0,.01,.97,0,.12,.26,.06,.4,.05,.26,.23,.52,.59,.61,.87,.36,.39,.02,0,.17,.1,0,.26,.26,0,.42,.71,.42,.05,.22,.05,.15,.47,.03,.47,.78,.22,.23,.15,.99,1,.04,.28,.19,.13,.01,.53,.2,0,.16,.01,.74,.95,.66,0,.01,.88,0,.66,.03,.3,.88,.46,.57,0,.76,0,.95,.5,.13,.56,.56,.9,.41,0,.06,.02,.42,0,.77,.53,.19,0,.79,.01,.59,.26,.29,.05,.49,.21,.57,.66,.25,.06,.47,.09,.7,.06,.01,0,.6,.74,0,.48,.6,.07,0,.56,.1,.22,.92,.26,.08,0,.03,0,0,.71,.01,.08,.27,.43,.11,.34,.75,0,.49,.9,.33,.05,0,.56,0,0,.03,.15,.05,.44,.38,.87,.01,0,.67,.27,.6,0,.05,.9,.16,.95,.68,.03,.38,.23,0,.01,.93,.11,.04,.13,.42,.03,.71,.41,.8,.71,0,.81,.01,.72,.85,.51,.08,.21,.91,1,.96,.91,.16,.02,.63,.32,.23,.84,.09,.92,.49,.24,.32,.17,.94,.51,.45,.84,.43,.26,.03,.71,.8,.19,.5,.73,.12,.21,.81,.7,.04,.04,0,.09,.99,.35,.07,.05,.02,.38,.88,.97,.39,.44,0,0,.03,.74,.99,.53,.47,.55,.05,.39,.36,0,.7,0,.01,.16,.96,.05,.01,.48,0,.26,.61,.03,0,.79,.08,0,.34,.95,.03,0,0,.56,0,.28,.31,.07,.11,.42,0,.29,.01,.57,.87,.09,.26,.42,.82,.49,.04,.79,.03,.26,.7,.04,.88,.3,.16,.2,.05,.52,.44,.31,0,.58,.19,.68,.18,.27,.21,.32,.13,.01,.58,.37,.1,.52,.24,0,.06,.64,.13,.29,.47,.71,.88,.48,.22,.5,.68,0,.03,.8,.58,.29,.15,.42,0,.07,0,.37,.01,.16,.09,.65,.11,.47,0,0,.86,0,.03,.26,.85,.06,.06,.06,.18,0,.52,0,.39,.6,.49,.34,.6,.93,.28,.3,.01,.16,0,.03,.04,.09,.34,.22,.2,.02,.15,.93,.43,.77,.91,.09,.09,0,.2,.97,.34,.25,.96,0,.52,.15,.6,.94,.18,.14,.05,.09,.57,.03,.22,.59,.86,.05,.86,.51,.77,.39,.48,.06,.01,.09,0,.13,.5,.53,.21,.21,.77,.37,.35,.81,0,.02,.2,.42,.22,.49,.03,.28,.64,.16,.04,.13,.31,.48,.11,.04,.56,.44,.14,.17,.8,.74,.09,0,0,.32,.01,.01,.02,.09,.03,.46,.48,.47,.24,.99,.28,.4,.12,0,.01,.01,.06,.01,.01,.13,.41,.79,.69,.62,0,.23,.87,.04,.15,0,.02,.2,.08,.13,.09,.1,0,.46,.06,.02,0,.29,.96,.02,.13,0,.51,0,.52,.01,.18,0,.95,1,.98,.98,.02,.11,0,.83,.36,0,0,.33,.23,0,.84,.28,.7,.01,.96,.41,.47,0,.33,.93,.01,.74,.01,.68,.38,.13,.01,.01,.13,.02,.55,.53,.09,.05,.15,.4,.02,0,.06,.13,0,.28,.01,0,.15,0,0,.62,.37,.01,.64,.03,.99,.94,.06,.13,.73,.74,.1,.56,.76,.75,.04,.85,.39,.02,.31,.01,0,.1,.44,.08,.58,.45,.25,.03,.28,.31,.26,.68,0,.08,.9,.38,.21,.69,.41,.2,0,.82,0,0,0,.51,.05,.44,.06,.13,.17,.15,.25,.04,.1,.01,0,.92,.2,.27,0,.26,.37,.33,.25,.78,.1,.79,0,.36,.85,.64,.13,.38,.14,.01,.16,.02,.3,.35,.85,.04,.02,.48,.17,.24,.03,0,.02,.39,0,0,.31,.28,.4,.7,.14,0,.16,.53,.22,.91,0,0,.17,.04,.01,.01,.31,.02,.08,.91,.86,.78,.51,0,.06,.15,.71,.04,.89,.06,.19,0,.59,0,.04,.8,.08,.88,.85,.15,.96,.64,0,.99,0,.34,.04,.14,.78,.21,0,.47,.02,.67,.15,.09,.4,.84,.16,.05,.77,.05,.34,.64,.49,.55,.86,.28,1,.24,.02,.17,0,.45,.18,.53,.04,.49,.05,.24,.28,0,.45,.04,1,.63,.11,.01,.19,.16,.42,.68,.73,.63,.18,.13,.88,.03,0,.95,.43,0,.19,.23,.51,.53,.75,.01,.83,0,0,.01,.57,.56,.8,.97,.28,0,0,.75,.05,.33,0,.81,.01,0,.04,.05,.03,.14,.71,.18,.6,.76,.61,0,.02,.06,.7,.97,.54,.9,.93,.18,.19,.47,.25,0,0,.86,0,.62,0,.06,.93,.68,.01,.01,.08,.3,.12,.29,.54,.2,.02,.7,.03,0,.62,.6,.01,.64,.07,.02,.57,.13,.19,.18,.2,.01,.04,.79,.96,.84,.37,.24,.46,.16,.38,.08,.09,.52,.11,.93,.62,.14,.72,.04,.52,.04,.1,.06,.19,.06,.55,.06,.27,.58,.41,.25,.1,.03,.84,.65,.66,.01,.56,.05,.96,0,.46,.84,0,.14,.6,.15,.21,.01,0,.39,.42,.24,0,.38,.63,.74,.01,.01,0,.21,.01,.8,0,0,.25,.13,.89,.32,.35,.43,.7,0,.27,.18,.97,.12,.01,.56,.31,.13,.54,0,.04,.39,.3,.85,.01,.54,.72,.81,.68,.36,.08,.16,.01,.14,.05,.67,0,.3,.02,.16,.05,.06,.01,.43,0,.45,.05,0,.81,.07,.09,.39,0,.92,.28,1,.45,.75,.1,.09,.82,.73,.69,.34,.17,.6,.01,.95,.03,.01,.54,0,.71,0,.01,0,.46,.02,.44,.4,.07,.16,.16,.65,0,.21,.03,.16,.89,.03,.8,.79,.53,.92,.1,.12,.59,.66,.35,.29,.06,.38,1,.13,.36,0,.89,.89,.14,.17,.39,.59,.17,.06,.52,.73,.91,.66];export{a as pvalData};
