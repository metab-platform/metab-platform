const a=[0,.43,.48,.01,.67,0,.56,.28,.74,.18,.96,.01,0,.57,.93,.22,.15,.76,.1,.02,.2,.8,.24,.3,.87,.98,.83,.46,.37,.95,.34,.55,.72,0,.01,.02,.2,.52,.25,.61,.62,.88,.5,.17,.02,.11,.93,.01,.93,.28,.83,0,.02,.58,.32,.78,.87,0,.86,.74,.03,.61,.71,.03,.19,.64,.45,.75,.23,.99,.21,.97,.98,.07,.77,.06,.01,.03,.49,.31,.69,.9,.31,.94,.9,.2,.54,.43,.54,.65,.43,.05,.88,.62,.24,.01,.9,0,.79,.21,.59,.35,.25,.72,.66,.49,.76,.03,.56,.88,.06,.9,.57,.47,.35,.57,.3,.49,.92,.55,.45,.45,0,.72,.5,.5,.64,.15,.06,.7,.97,.69,.25,.91,.06,.16,.39,.01,.29,0,.74,0,.92,.91,0,.08,.73,.22,.4,.48,.35,.68,.78,.01,.85,.15,.3,0,.5,.73,.89,.48,.02,.73,.7,.26,.86,.21,.23,.82,0,.84,.9,.23,.05,.56,.4,.78,.64,.52,.58,.43,.42,.94,.66,0,0,0,.8,.02,.95,.12,.01,.49,.69,.15,.88,.03,0,.52,.82,.78,.75,.1,.79,.6,.01,.97,.46,0,.94,.46,.03,.47,0,.85,.94,.56,.39,.83,.9,.79,.7,.52,.18,.71,.49,.16,.02,.65,.61,.88,.97,.64,0,0,.77,.57,.89,.8,.33,.57,.69,.75,1,.73,.2,.35,.21,.24,.12,0,.58,.8,.55,.05,.01,.33,.29,.9,.69,.86,.74,.78,.28,.7,.25,.89,.86,.04,.01,0,.56,.76,.91,.21,.55,.08,.8,.77,.8,.43,.7,.23,.94,.6,.27,.39,.11,.49,.48,.12,.72,.97,.94,.62,.48,0,.19,.48,.49,.77,.39,.5,.03,.18,.94,.11,.48,.75,.89,.9,0,0,.13,.48,.82,.83,.66,.94,.56,.19,.25,.95,.25,.83,.71,.38,.22,.86,.63,.76,.64,.07,.44,.1,.87,.4,.92,.59,.8,.83,.76,.84,.51,.36,.84,.43,.78,.81,.78,.12,0,.78,.8,.82,.58,.38,.45,.43,.28,.33,.28,0,.85,.27,0,.96,.14,.45,.98,.65,.36,.26,.02,.29,.14,.59,.25,.27,.48,.08,.49,.99,.02,.36,.29,.19,.51,.76,.3,0,.68,.08,.05,.96,.65,.45,.47,.11,.53,.53,.35,.65,.98,.81,.6,.28,.96,.64,.7,.17,.81,.5,.01,0,.69,.91,.56,0,.01,.27,.04,0,.57,.87,.81,.64,.95,.66,.15,.25,.59,.01,.93,.99,.45,.84,.88,.01,.34,.98,.9,.01,.64,.22,.94,.28,.66,.1,.9,.31,.97,.81,.64,.52,.4,.29,.04,.57,.83,.91,.98,.12,.78,.25,.16,.35,.13,.53,.08,.52,0,0,.85,.93,.6,.56,.11,.37,.62,.63,.18,.57,.55,.54,.86,.76,.53,.53,.82,.02,.19,.14,.3,.98,.76,.77,.93,.62,.85,.69,.45,.97,.59,.8,.35,.25,.95,.18,.38,.66,.96,.79,.71,.79,0,.7,.05,.98,.06,.68,.53,.61,.42,0,.3,.09,.66,.21,.94,.82,.13,.68,0,0,.92,.53,.89,.22,.02,.62,0,.68,.13,.97,0,.61,.43,.88,.11,.77,.6,.13,.67,.01,.93,.36,.76,.72,.65,.78,.15,.71,.91,.92,.19,.03,0,.14,.5,.78,.55,.56,.92,.87,.04,.71,.58,.96,.06,0,.99,.65,.61,.53,.91,.46,.2,.28,.97,.22,.64,.5,.56,.02,.53,.73,.01,.22,.37,.66,.81,.01,.51,.79,.51,.44,.05,.69,.57,.12,.02,.06,.04,.57,.98,.64,.33,0,.81,.31,.62,.08,1,0,.14,.63,.8,.68,.07,.1,.28,.22,.39,.14,.86,.69,.94,.41,.07,.92,.29,.09,.27,.51,.92,.54,.05,.79,0,.18,.29,.64,.81,.54,.35,.27,.05,.47,.86,.81,.28,.07,.93,0,.33,.87,.82,.84,.43,.19,1,.93,.05,.92,.69,.99,.26,.67,.34,.56,.93,.86,.2,0,.88,.93,.93,.12,.1,.28,.96,0,0,.44,0,0,.86,.02,.85,.7,.93,.81,.1,.08,.15,.32,0,.64,.67,.97,.03,.35,.37,.67,.15,.54,.39,.1,.55,.65,.14,.3,.96,.06,.98,.64,0,.79,.18,.44,.72,.47,.62,.73,.47,.76,.6,.08,.66,.81,.38,.38,.74,.03,.56,.37,.66,.33,0,.77,.97,.49,.33,.17,.87,.21,.26,.71,.66,.74,.93,.29,.98,.84,.39,0,.12,0,.57,.55,.96,0,.79,.01,.97,.72,.55,.75,.99,.56,0,.64,.55,.41,.54,.03,.64,.94,.59,.96,.56,.37,.55,.59,.51,.84,.76,.7,.08,.07,.06,.48,.02,.28,.4,.68,.23,.77,.11,.57,.79,.9,.77,.41,.01,.47,.08,.97,0,.14,.82,.05,0,.6,.02,.09,.93,.68,.5,.9,.01,.78,.03,.82,.68,.54,0,.88,.26,.91,0,.49,.16,.41,.16,.29,.62,.09,.08,.07,.5,.27,.79,.13,.08,.36,.74,.18,.31,.68,.66,.04,.52,.58,.69,0,.12,.85,.34,.01,.13,.92,.89,.54,.55,.36,.69,0,.75,.38,.29,.65,.67,.5,.09,.4,.47,.61,.86,.01,.37,.06,.16,.45,.05,.02,.04,.69,.64,.23,.5,.28,0,.97,.01,.88,0,.71,0,.55,.03,.1,.65,.62,0,.57,.48,.92,.93,.1,.15,.32,.67,.65,0,.92,.57,.75,.12,.87,.51,.81,.32,.25,.26,.07,.02,.76,0,.97,.61,.46,.93,.8,.87,.04,.68,.35,.81,.49,.29,.96,.96,.57,.76,.61,.84,.71,.89,.37,.65,.8,.77,.28,.53,.13,.27,.41,.02,.02,.57,.56,.71,.8,1,.94,.96,.45,.84,.96,.76,.72,.5,.15,.96,0,0,.02,.69,.76,.91,.55,.46,.93,.89,.23,.26,.75,.29,.76,.92,.04,.02,.55,0,.01,.53,0,.75,.1,.64,.32,.45,.12,.32,.38,.61,0,.92,.19,.08,.93,.38,.01,.47,.64,0,.45,.69,.18,.09,.86,.12,.41,.8,.59,.93,.42,.86,1,0,.25,.15,.93,.13,.73,.39,.3,.77,.42,.81,.87,.05,.19,.47,.19,.92,.83,.33,0,.07,.71,.85,.46,.27,.48,.68,.25,.85,.01,0,.63,.96,.74,.56,.43,.12,.72,0,.69,.02,.67,.02,.82,.34,0,.56,.77,.02,.76,.56,.6,.59,.82,.78,.17,.92,.72,.24,.3,.13,.84,.88,.75,.31,.59,.66,.25,0,.88,.6,.43,.9,.03,.75,.93,.68,.83,.32,.63,0,0,.15,.09,.89,.46,.19,.51,.72,.72,.97,0,.02,.92,.88,.24,0,.75,.71,0,.42,.86,.41,0,.56,.3,.76,.34,.09,.09,0,.53,.3,.5,0,.75,0,0,.88,.81,0,.7,.27,.85,.63,.7,.62,.42,1,0,.28,.61,.63,.66,.88,.59,.98,.74,.92,.76,0,.86,.07,0,.96,.87,.35,.36,.42,.93,.81,.5,.84,0,.26,.67,.48,.88,.09,.1,.02,.6,.72,.48,.45,.34,.61,.71,.55,0,.03,.33,.61,.92,.07,.65,.47,.23,.03,.88,.12,0,0,.1,.03,.4,.17,.1,.63,.34,.94,.81,.91,.43,.35,.09,.01,0,.65,.93,.62,.5,0,.24,0,.86,.69,0,.91,.71,.01,.17,0,.38,.96,.07,.6,.72,.07,.94,.59,.49,0,.05,.9,.75,.73,0,.96,.86,.3,.52,.26,.81,.31,0,.2,.14,.87,0,.59,.77,.75,0,.81,.5,.18,0,.39,.34,.7,.03,.46,.54,.82,.66,.22,.73,.78,.57,.41,.37,.76,.89,.04,.4,.6,.26,.47,.75,.42,.64,.06,.95,.61,.4,.71,0,.82,.24,0,.78,.39,.01,.51,.96,.31,.71,.36,.21,.52,.79,.57,.35,.48,.01,.34,.19,.79,0,.93,.93,.72,.06,.95,.42,.02,.46,.13,.4,.09,.65,0,.22,.47,.45,.84,.49,.05,.23,0,.71,.1,.37,.05,.99,.32,.81,.91,.49,.62,.83,.01,.78,.59,.8,.1,.94,.68,.73,.92,.79,.95,.39,0,.51,.19,.17,.01,.3,.51,.77,.48,.04,.49,.01,.69,.66,.89,.22,.48,.52,.61,.75,.06,.39,.13,.04,.47,.55,0,.76,.7,.67,.83,.72,.06,.76,.96,.03,.03,.46,.58,.03,.98,.28,.86,.89,.02,.21,.9,.59,.71,.98,.25,0,.13,.03,.97,.46,.59,.96,0,.54,.08,.42,.65,.23,0,.5,.37,.61,.79,.98,.86,.28,.27,.87,.89,.39,.01,.01,.35,.16,.86,.84,.09,.1,.5,.12,.9,.81,.56,.02,.47,.3,.51,.77,.57,.31,.72,.83,.48,.68,.95,.74,.42,.15,.92,.26,.78,.8,.8,.34,.04,.35,.64,.1,.5,.91,.9,.69,.28,.65,.66,.26,.22,.29,.5,.56,.42,.69,.13,.01,.86,.07,.88,.88,.96,.62,.42,0,.43,.81,.86,0,.47,.4,.71,.13,.78,.2,.24,.45,.76,.61,.57,.97,.73,.67,.62,.27,.3,.37,.28,.21,.97,.73,.28,.27,.92,.46,0,.99,.49,.77,.86,.36,.62,.8,.77,.82,.8,.73,.86,.81,.6,.52,.49,.96,.83,.89,0,.83,.67,.69,.68,.65,.98,.78,.37,.48,.39,.87,.94,.52,.48,.75,.57,.73,.91,.89,.98,.5,.56,.66,.01,.55,.33,.65,.91,.67,.67,.37,.1,.79,.22,.74,.23,.73,.44,.32,.33,.08,.5,.7,.32,.73,0,.65,.88,.04,.76,.78,.09,.62,.26,.48,.47,.88,.13,.02,.78,.03,.94,.5,.98,.77,.88,.7,.91,.12,.55,.53,.32,.58,.34,.88,.73,.82,.3,.67,.7,.01,.64,.12,.77,.96,.64,.67,.82,.41,.51,.25,.54,.86,.58,.63,.96,.58,.51,.83,.83,.27,.25,.02,.28,.69,.88,.99,.09,.75,.43,.46,.04,.23,.52,.81,0,.52,.57,.96,.95,.63,.49,.49,.48,.87,.46,.65,.55,.69,.99,.15,.63,.62,.89,.23,.58,.93,.91,.94,.81,.82,.29,.77,.76,.87,.42,.7,.88,.7,.44,.28,.45,0,.15,.41,.54,.1,.08,.17,.27,.23,.63,.77,.83,.38,0,.27,.4,.22,.3,.28,.38,.43,.17,.48,.23,.94,.09,.55,.99,.73,.49,.83,.85,.27,.45,.23,.03,.78,.02,.39,.91,0,.51,.67,.47,.92,.93,.94,.97,.82,.63,.53,.54,.96,.74,.93,.33,.3,.33,.99,.21,.98,.96,.1,.43,.35,.72,.15,.35,.42,.49,.72,.95,.26,.12,.46,.09,.19,.79,.45,.16,0,.8,.22,.97,.78,.83,.84,.2,.73,.62,.43,.42,.17,.79,.51,.39,.62,.44,.62,.47,.34,.86,.1,.94,.38,.21,.6,.69,0,0,.3,.46,.4,.26,.9,.02,.78,.18,.38,.05,.52,.57,.17,.9,.4,.8,.42,.51,.92,.79,.26,.48,0,.23,.54,0,.84,.46,.11,.31,.81,.88,.97,.69,.26,.46,.65,.42,.99,.6,.9,.52,.13,0,.29,.01,.06,.35,.44,.3,.07,.45,.83,.97,.9,.23,0,.71,.06,.76,.78,.03,.01,.8,.12,.35,.27,.66,.67,.37,.84,.9,.16,.52,.58,.41,.98,.24,.41,.03,.87,.02,.22,.8,.93,0,.41,.96,0,.95,.36,0,.83,.34,.7,.81,.29,.47,.21,0,.01,.46,.35,.24,.81,.37,.11,.13,.74,1,.94,.89,0,.56,.62,.85,.26,0,0,.06,.01,.99,.42,.58,.97,.21,.03,.34,.87,.14,0,.06,.11,0,.93,.46,.71,.8,.55,.66,.11,.07,.36,.25,.45,.87,.05,.18,.24,.87,.14,.74,.35,.76,.8,.07,.48,.86,.85,.23,.22,.86,.11,.89,.47,.73,.01,.69,.29,.44,.49,.76,.52,.44,.96,.31,.31,.93,.2,.02,.41,.09,.97,.42,.97,.9,.94,.96,.63,.84,.26,.48,.64,.75,.86,0,.98,.61,.42,.41,.37,.89,.26,.14,.22,.41,.59,.62,.59,.21,.12,.6,.06,.74,.11,.01,.01,.01,.06,.41,.62,.94,0,.64,.09];export{a as pvalData};
